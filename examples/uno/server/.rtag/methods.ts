import { Response } from "./base";
import {
  UserId,
  PlayerState as UserState,
  ICreateGameRequest,
  IJoinGameRequest,
  IStartGameRequest,
  IPlayCardRequest,
  IDrawCardRequest,
} from "./types";

export interface Context {
  rand(): number;
  randInt(limit?: number): number;
  time(): number;
}

type State =
  | undefined
  | string
  | number
  | boolean
  | readonly State[]
  | { [k: string]: State }
  | Set<State>
  | Map<State, State>
  | (object & { _modCnt: number });
export interface Methods<T extends State> {
  createGame(userId: UserId, ctx: Context, request: ICreateGameRequest): T;
  joinGame(state: T, userId: UserId, ctx: Context, request: IJoinGameRequest): Response;
  startGame(state: T, userId: UserId, ctx: Context, request: IStartGameRequest): Response;
  playCard(state: T, userId: UserId, ctx: Context, request: IPlayCardRequest): Response;
  drawCard(state: T, userId: UserId, ctx: Context, request: IDrawCardRequest): Response;
  getUserState(state: T, userId: UserId): UserState;
}
