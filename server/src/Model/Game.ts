import {Player} from "@server/Model/Player";
import {Card} from "@server/Model/Card";

export type Game = {
    name: string;

    deck: Card[];

    usedDeck: Card[];

    host: Player;

    players: Player[];

    playerDictionary: {[key: string]: Player};

    activePlayerIndex: number;
}
