import {Player} from "@server/Model/Player";
import {Move} from "@server/Model/Move";
import {MoveTarget} from "@server/Model/MoveTarget";

export interface PlayerInputServiceInterface {
    getGameNameFromPlayer(player: Player): string;

    getMoveFromPlayer(player: Player): Move;
}

export class PlayerInputService implements PlayerInputServiceInterface {
    public getGameNameFromPlayer(player: Player): string {
        return "Becky and Brian's Game";
    }

    public getMoveFromPlayer(player: Player): Move {
        return {
            fromTarget: MoveTarget.HAND,
            fromIndex: 1,
            toTarget: MoveTarget.BUILD_1,
            toIndex: 0
        };
    }
}
