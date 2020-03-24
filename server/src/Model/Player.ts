import {Card} from "@server/Model/Card";

export type Player = {
    name: string;

    pile: Card[];

    hand: Card[];

    discard1: Card[];

    discard2: Card[];

    discard3: Card[];

    discard4: Card[];
}
