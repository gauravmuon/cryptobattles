import {
  GameStarted as GameStartedEvent,
  GameStopped as GameStoppedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RoundDistributed as RoundDistributedEvent,
  RoundEnded as RoundEndedEvent,
  RoundStarted as RoundStartedEvent,
  TradePlaced as TradePlacedEvent,
  TradeReturned as TradeReturnedEvent,
  TradeWinningsSent as TradeWinningsSentEvent
} from "../generated/UpVsDownGameV2/UpVsDownGameV2"
import {
  GameStarted,
  GameStopped,
  OwnershipTransferred,
  RoundDistributed,
  RoundEnded,
  RoundStarted,
  TradePlaced,
  TradeReturned,
  TradeWinningsSent
} from "../generated/schema"

export function handleGameStarted(event: GameStartedEvent): void {
  let entity = new GameStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGameStopped(event: GameStoppedEvent): void {
  let entity = new GameStopped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reason = event.params.reason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundDistributed(event: RoundDistributedEvent): void {
  let entity = new RoundDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.totalWinners = event.params.totalWinners
  entity.from = event.params.from
  entity.to = event.params.to
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundEnded(event: RoundEndedEvent): void {
  let entity = new RoundEnded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.timestamp = event.params.timestamp
  entity.startPrice = event.params.startPrice
  entity.endPrice = event.params.endPrice
  entity.indexedPoolId = event.params.indexedPoolId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundStarted(event: RoundStartedEvent): void {
  let entity = new RoundStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.timestamp = event.params.timestamp
  entity.price = event.params.price
  entity.minTradeAmount = event.params.minTradeAmount
  entity.maxTradeAmount = event.params.maxTradeAmount
  entity.poolTradesLimit = event.params.poolTradesLimit
  entity.indexedPoolId = event.params.indexedPoolId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTradePlaced(event: TradePlacedEvent): void {
  let entity = new TradePlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.sender = event.params.sender
  entity.amount = event.params.amount
  entity.prediction = event.params.prediction
  entity.newTotal = event.params.newTotal
  entity.indexedPoolId = event.params.indexedPoolId
  entity.indexedSender = event.params.indexedSender
  entity.avatarUrl = event.params.avatarUrl
  entity.countryCode = event.params.countryCode
  entity.roundStartTime = event.params.roundStartTime
  entity.whiteLabelId = event.params.whiteLabelId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTradeReturned(event: TradeReturnedEvent): void {
  let entity = new TradeReturned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.sender = event.params.sender
  entity.amount = event.params.amount
  entity.whiteLabelId = event.params.whiteLabelId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTradeWinningsSent(event: TradeWinningsSentEvent): void {
  let entity = new TradeWinningsSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.sender = event.params.sender
  entity.tradeAmount = event.params.tradeAmount
  entity.winningsAmount = event.params.winningsAmount
  entity.indexedSender = event.params.indexedSender
  entity.whiteLabelId = event.params.whiteLabelId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
