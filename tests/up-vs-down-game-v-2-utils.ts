import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/UpVsDownGameV2/UpVsDownGameV2"

export function createGameStartedEvent(): GameStarted {
  let gameStartedEvent = changetype<GameStarted>(newMockEvent())

  gameStartedEvent.parameters = new Array()

  return gameStartedEvent
}

export function createGameStoppedEvent(reason: Bytes): GameStopped {
  let gameStoppedEvent = changetype<GameStopped>(newMockEvent())

  gameStoppedEvent.parameters = new Array()

  gameStoppedEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromBytes(reason))
  )

  return gameStoppedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRoundDistributedEvent(
  poolId: Bytes,
  totalWinners: BigInt,
  from: BigInt,
  to: BigInt,
  timestamp: BigInt
): RoundDistributed {
  let roundDistributedEvent = changetype<RoundDistributed>(newMockEvent())

  roundDistributedEvent.parameters = new Array()

  roundDistributedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromBytes(poolId))
  )
  roundDistributedEvent.parameters.push(
    new ethereum.EventParam(
      "totalWinners",
      ethereum.Value.fromUnsignedBigInt(totalWinners)
    )
  )
  roundDistributedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromUnsignedBigInt(from))
  )
  roundDistributedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromUnsignedBigInt(to))
  )
  roundDistributedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromSignedBigInt(timestamp)
    )
  )

  return roundDistributedEvent
}

export function createRoundEndedEvent(
  poolId: Bytes,
  timestamp: BigInt,
  startPrice: i32,
  endPrice: i32,
  indexedPoolId: Bytes
): RoundEnded {
  let roundEndedEvent = changetype<RoundEnded>(newMockEvent())

  roundEndedEvent.parameters = new Array()

  roundEndedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromBytes(poolId))
  )
  roundEndedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromSignedBigInt(timestamp)
    )
  )
  roundEndedEvent.parameters.push(
    new ethereum.EventParam("startPrice", ethereum.Value.fromI32(startPrice))
  )
  roundEndedEvent.parameters.push(
    new ethereum.EventParam("endPrice", ethereum.Value.fromI32(endPrice))
  )
  roundEndedEvent.parameters.push(
    new ethereum.EventParam(
      "indexedPoolId",
      ethereum.Value.fromBytes(indexedPoolId)
    )
  )

  return roundEndedEvent
}

export function createRoundStartedEvent(
  poolId: Bytes,
  timestamp: BigInt,
  price: i32,
  minTradeAmount: BigInt,
  maxTradeAmount: BigInt,
  poolTradesLimit: BigInt,
  indexedPoolId: Bytes
): RoundStarted {
  let roundStartedEvent = changetype<RoundStarted>(newMockEvent())

  roundStartedEvent.parameters = new Array()

  roundStartedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromBytes(poolId))
  )
  roundStartedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromSignedBigInt(timestamp)
    )
  )
  roundStartedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromI32(price))
  )
  roundStartedEvent.parameters.push(
    new ethereum.EventParam(
      "minTradeAmount",
      ethereum.Value.fromUnsignedBigInt(minTradeAmount)
    )
  )
  roundStartedEvent.parameters.push(
    new ethereum.EventParam(
      "maxTradeAmount",
      ethereum.Value.fromUnsignedBigInt(maxTradeAmount)
    )
  )
  roundStartedEvent.parameters.push(
    new ethereum.EventParam(
      "poolTradesLimit",
      ethereum.Value.fromUnsignedBigInt(poolTradesLimit)
    )
  )
  roundStartedEvent.parameters.push(
    new ethereum.EventParam(
      "indexedPoolId",
      ethereum.Value.fromBytes(indexedPoolId)
    )
  )

  return roundStartedEvent
}

export function createTradePlacedEvent(
  poolId: Bytes,
  sender: Address,
  amount: BigInt,
  prediction: string,
  newTotal: BigInt,
  indexedPoolId: Bytes,
  indexedSender: Address,
  avatarUrl: string,
  countryCode: string,
  roundStartTime: BigInt,
  whiteLabelId: string
): TradePlaced {
  let tradePlacedEvent = changetype<TradePlaced>(newMockEvent())

  tradePlacedEvent.parameters = new Array()

  tradePlacedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromBytes(poolId))
  )
  tradePlacedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  tradePlacedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tradePlacedEvent.parameters.push(
    new ethereum.EventParam("prediction", ethereum.Value.fromString(prediction))
  )
  tradePlacedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotal",
      ethereum.Value.fromUnsignedBigInt(newTotal)
    )
  )
  tradePlacedEvent.parameters.push(
    new ethereum.EventParam(
      "indexedPoolId",
      ethereum.Value.fromBytes(indexedPoolId)
    )
  )
  tradePlacedEvent.parameters.push(
    new ethereum.EventParam(
      "indexedSender",
      ethereum.Value.fromAddress(indexedSender)
    )
  )
  tradePlacedEvent.parameters.push(
    new ethereum.EventParam("avatarUrl", ethereum.Value.fromString(avatarUrl))
  )
  tradePlacedEvent.parameters.push(
    new ethereum.EventParam(
      "countryCode",
      ethereum.Value.fromString(countryCode)
    )
  )
  tradePlacedEvent.parameters.push(
    new ethereum.EventParam(
      "roundStartTime",
      ethereum.Value.fromSignedBigInt(roundStartTime)
    )
  )
  tradePlacedEvent.parameters.push(
    new ethereum.EventParam(
      "whiteLabelId",
      ethereum.Value.fromString(whiteLabelId)
    )
  )

  return tradePlacedEvent
}

export function createTradeReturnedEvent(
  poolId: Bytes,
  sender: Address,
  amount: BigInt,
  whiteLabelId: string
): TradeReturned {
  let tradeReturnedEvent = changetype<TradeReturned>(newMockEvent())

  tradeReturnedEvent.parameters = new Array()

  tradeReturnedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromBytes(poolId))
  )
  tradeReturnedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  tradeReturnedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tradeReturnedEvent.parameters.push(
    new ethereum.EventParam(
      "whiteLabelId",
      ethereum.Value.fromString(whiteLabelId)
    )
  )

  return tradeReturnedEvent
}

export function createTradeWinningsSentEvent(
  poolId: Bytes,
  sender: Address,
  tradeAmount: BigInt,
  winningsAmount: BigInt,
  indexedSender: Address,
  whiteLabelId: string
): TradeWinningsSent {
  let tradeWinningsSentEvent = changetype<TradeWinningsSent>(newMockEvent())

  tradeWinningsSentEvent.parameters = new Array()

  tradeWinningsSentEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromBytes(poolId))
  )
  tradeWinningsSentEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  tradeWinningsSentEvent.parameters.push(
    new ethereum.EventParam(
      "tradeAmount",
      ethereum.Value.fromUnsignedBigInt(tradeAmount)
    )
  )
  tradeWinningsSentEvent.parameters.push(
    new ethereum.EventParam(
      "winningsAmount",
      ethereum.Value.fromUnsignedBigInt(winningsAmount)
    )
  )
  tradeWinningsSentEvent.parameters.push(
    new ethereum.EventParam(
      "indexedSender",
      ethereum.Value.fromAddress(indexedSender)
    )
  )
  tradeWinningsSentEvent.parameters.push(
    new ethereum.EventParam(
      "whiteLabelId",
      ethereum.Value.fromString(whiteLabelId)
    )
  )

  return tradeWinningsSentEvent
}
