export class User {
    constructor(
        public _id?: string,
        public name: string='',
        public password: string='',
        public contact: string='',
        public address: string='',
        public postlID: string=''
    ) {}
}
