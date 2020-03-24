import {Game} from "@server/Model/Game";
import {Player} from "@server/Model/Player";
import {Card} from "@server/Model/Card";
import {PlayerInputServiceInterface, PlayerInputService} from "@server/Service/PlayerInputService";
import jvent from "jvent";
import {Move} from "@server/Model/Move";
import {MoveTarget} from "@server/Model/MoveTarget";

const CARDS_PER_PLAYER_PILE = 10;
const CARDS_PER_PLAYER_HAND = 5;

export class DealerService {
    private playerInputService: PlayerInputServiceInterface;

    public constructor(playerInputService: PlayerInputServiceInterface) {
        this.playerInputService = playerInputService;
    }

    public deal(host: Player) {
        let gameName: string = this.playerInputService.getGameNameFromPlayer(host);

        let game: Game = this.createGame(gameName, host);
        this.addPlayerToGame(game, this.createPlayer('Becky'));
        this.addPlayerToGame(game, this.createPlayer('Brian'));

        this.shuffleDeck(game.deck);
        this.distributeCards(game.deck, game.players);

        let hasWon: boolean = false;
        while (!hasWon) {
            let activePlayer: Player = game.players[game.activePlayerIndex];

            let move = this.playerInputService.getMoveFromPlayer(activePlayer);
            // this.validateMove(activePlayer, move);
        }
    }

    private createGame(name: string, host: Player): Game {
        return {
            name,
            host,
            deck: this.blankDeck(),
            usedDeck: [],
            players: [],
            playerDictionary: {},
            activePlayerIndex: 0
        };
    }

    private createPlayer(name: string): Player {
        return {
            name,
            pile: [],
            hand: [],
            discard1: [],
            discard2: [],
            discard3: [],
            discard4: []
        };
    }

    private addPlayerToGame(game: Game, player: Player) {
        game.players.push(player);
        game.playerDictionary[player.name] = player;
    }

    private print(deck: Card[]) {
        console.log(deck.join(','));
        console.log('');
    }

    private blankDeck(): Card[] {
        return [
            // 12 of each card 1 - 12
            Card.ONE, Card.ONE, Card.ONE, Card.ONE, Card.ONE, Card.ONE, Card.ONE, Card.ONE, Card.ONE, Card.ONE, Card.ONE, Card.ONE,
            Card.TWO, Card.TWO, Card.TWO, Card.TWO, Card.TWO, Card.TWO, Card.TWO, Card.TWO, Card.TWO, Card.TWO, Card.TWO, Card.TWO,
            Card.THREE, Card.THREE, Card.THREE, Card.THREE, Card.THREE, Card.THREE, Card.THREE, Card.THREE, Card.THREE, Card.THREE, Card.THREE, Card.THREE,
            Card.FOUR, Card.FOUR, Card.FOUR, Card.FOUR, Card.FOUR, Card.FOUR, Card.FOUR, Card.FOUR, Card.FOUR, Card.FOUR, Card.FOUR, Card.FOUR,
            Card.FIVE, Card.FIVE, Card.FIVE, Card.FIVE, Card.FIVE, Card.FIVE, Card.FIVE, Card.FIVE, Card.FIVE, Card.FIVE, Card.FIVE, Card.FIVE,
            Card.SIX, Card.SIX, Card.SIX, Card.SIX, Card.SIX, Card.SIX, Card.SIX, Card.SIX, Card.SIX, Card.SIX, Card.SIX, Card.SIX,
            Card.SEVEN, Card.SEVEN, Card.SEVEN, Card.SEVEN, Card.SEVEN, Card.SEVEN, Card.SEVEN, Card.SEVEN, Card.SEVEN, Card.SEVEN, Card.SEVEN, Card.SEVEN,
            Card.EIGHT, Card.EIGHT, Card.EIGHT, Card.EIGHT, Card.EIGHT, Card.EIGHT, Card.EIGHT, Card.EIGHT, Card.EIGHT, Card.EIGHT, Card.EIGHT, Card.EIGHT,
            Card.NINE, Card.NINE, Card.NINE, Card.NINE, Card.NINE, Card.NINE, Card.NINE, Card.NINE, Card.NINE, Card.NINE, Card.NINE, Card.NINE,
            Card.TEN, Card.TEN, Card.TEN, Card.TEN, Card.TEN, Card.TEN, Card.TEN, Card.TEN, Card.TEN, Card.TEN, Card.TEN, Card.TEN,
            Card.ELEVEN, Card.ELEVEN, Card.ELEVEN, Card.ELEVEN, Card.ELEVEN, Card.ELEVEN, Card.ELEVEN, Card.ELEVEN, Card.ELEVEN, Card.ELEVEN, Card.ELEVEN, Card.ELEVEN,
            Card.TWELVE, Card.TWELVE, Card.TWELVE, Card.TWELVE, Card.TWELVE, Card.TWELVE, Card.TWELVE, Card.TWELVE, Card.TWELVE, Card.TWELVE, Card.TWELVE, Card.TWELVE,

            // 18 wild cards
            Card.WILD, Card.WILD, Card.WILD, Card.WILD, Card.WILD, Card.WILD, Card.WILD, Card.WILD, Card.WILD, Card.WILD, Card.WILD, Card.WILD, Card.WILD,
            Card.WILD, Card.WILD, Card.WILD, Card.WILD, Card.WILD
        ];
    }

    private shuffleDeck(deck: Card[]) {
        for (let i = 0; i < deck.length; i++) {
            // random number: 0 - deck.length
            let r = Math.floor(Math.random() * (deck.length + 1));
            let temp = deck[r];
            deck[r] = deck[i];
            deck[i] = temp;
        }
    }

    private distributeCards(deck: Card[], players: Player[]) {
        // deal piles
        for (let i = 0; i < players.length; i++) {
            for (let n = 0; n < CARDS_PER_PLAYER_PILE; n++) {
                players[i].pile.push(deck.pop());
            }
        }

        // deal hands
        for (let i = 0; i < players.length; i++) {
            for (let n = 0; n < CARDS_PER_PLAYER_HAND; n++) {
                players[i].hand.push(deck.pop());
            }
        }
    }
}
