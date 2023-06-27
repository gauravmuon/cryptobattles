import {
  OwnershipTransferred as OwnershipTransferredEvent,
  RoundDistributed as RoundDistributedEvent,
  RoundEnded as RoundEndedEvent,
  RoundStarted as RoundStartedEvent,
  TradePlaced as TradePlacedEvent,
  TradeReturned as TradeReturnedEvent,
  TradeWinningsSent as TradeWinningsSentEvent
} from "../generated/UpVsDownGameV2/UpVsDownGameV2";
import {
  Counter,
  RoundEnded,
  TradePlaced,
  TradeWinningsSent
} from "../generated/schema";


export function handleRoundEnded(event: RoundEndedEvent): void {
  const counter = _getOrCreatCounter();
  const entity = _getOrCreateRoundEnded(counter.count);
  counter.count = counter.count + 1;
  counter.save(); // increment the counter

  entity.timestamp = event.params.timestamp;
  entity.startPrice = event.params.startPrice;
  entity.endPrice = event.params.endPrice;
  entity.result = (entity.startPrice > entity.endPrice) ? "DOWN" : "UP";
  entity.blockNumber = event.block.number;
  entity.save();
}

export function handleTradePlaced(event: TradePlacedEvent): void {

  const entity = new TradePlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.sender = event.params.sender;
  entity.amount = event.params.amount;
  entity.prediction = event.params.prediction;
  entity.newTotal = event.params.newTotal;
  entity.indexedPoolId = event.params.indexedPoolId;
  entity.indexedSender = event.params.indexedSender;
  entity.avatarUrl = event.params.avatarUrl;
  entity.countryCode = event.params.countryCode;
  entity.roundStartTime = event.params.roundStartTime;
  entity.whiteLabelId = event.params.whiteLabelId;

  entity.blockNumber = event.block.number;
  entity.save();

  _storeTrade(entity);

}

export function handleTradeWinningsSent(event: TradeWinningsSentEvent): void {
  const entity = new TradeWinningsSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params.sender;
  entity.tradeAmount = event.params.tradeAmount;
  entity.winningsAmount = event.params.winningsAmount;
  entity.indexedSender = event.params.indexedSender;
  entity.whiteLabelId = event.params.whiteLabelId;
  entity.blockNumber = event.block.number;
  entity.save();

  _storeWinners(entity);
}

// try to store trade in current round, if round not present creat one
function _storeTrade(trade: TradePlaced): void {
  const counter = _getOrCreatCounter();
  const roundEnded = _getOrCreateRoundEnded(counter.count);
  roundEnded.traders = roundEnded.traders.concat([trade.id]);
  roundEnded.save();
}

function _storeWinners(winner: TradeWinningsSent): void {
  const counter = _getOrCreatCounter();
  const roundEnded = _getOrCreateRoundEnded(counter.count - 1);
  roundEnded.winners = roundEnded.winners.concat([winner.id]);
  roundEnded.save();
}

// try to find round with given id, if id dosen't match 
// means round with that id has ended, id has increased, create a new round
function _getOrCreateRoundEnded(id: number): RoundEnded {
  let entity = RoundEnded.load(id.toString());
  if (entity === null) {
    entity = new RoundEnded(id.toString());
    entity.traders = [];
    entity.result = "NONE";
    entity.winners = [];
  }
  return entity as RoundEnded;
}

// this entity keep the track of numbers of rounds going on
function _getOrCreatCounter(): Counter {
  let entity = Counter.load("counter");
  if (entity === null) {
    entity = new Counter("counter");
    entity.count = 0;
    entity.save();
  }
  return entity as Counter;
}