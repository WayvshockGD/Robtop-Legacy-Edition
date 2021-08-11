declare namespace RobtopLegacy {

    interface ICommand {
        name: string;
        desc: string;
        ownerOnly: boolean;
    }

    interface config {
        beta: boolean;
        secrets: {
            token: string;
            betaToken: string;
        }
    }
}