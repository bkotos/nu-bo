import {MoveTarget} from "@server/Model/MoveTarget";

export type Move = {
    fromTarget: MoveTarget;
    fromIndex: number;
    toTarget: MoveTarget;
    toIndex: number;
};
