import {Player} from "@server/Model/Player";
import {Move} from "@server/Model/Move";
import {MoveTarget} from "@server/Model/MoveTarget";

const FROM_TARGETS: MoveTarget[] = [
    MoveTarget.HAND,
    MoveTarget.STOCK,
    MoveTarget.DISCARD_1,
    MoveTarget.DISCARD_2,
    MoveTarget.DISCARD_3,
    MoveTarget.DISCARD_4
];

const TO_TARGETS: MoveTarget[] = [
    MoveTarget.DISCARD_1,
    MoveTarget.DISCARD_2,
    MoveTarget.DISCARD_3,
    MoveTarget.DISCARD_4,
    MoveTarget.BUILD_1,
    MoveTarget.BUILD_2,
    MoveTarget.BUILD_3,
    MoveTarget.BUILD_4,
];

export class RuleService {
    public validateMove(player: Player, move: Move) {
        if ([])

        switch (move.fromTarget) {
            case MoveTarget.HAND:
            case MoveTarget.STOCK:
            case MoveTarget.DISCARD_1:
            case MoveTarget.DISCARD_2:
            case MoveTarget.DISCARD_3:
            case MoveTarget.DISCARD_4:
                break;
            default:
                // TODO throw exception where player is moving from illegal place
                break;
        }

        switch (move.toTarget) {}
    }
}
