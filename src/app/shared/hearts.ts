export class Heart {
    constructor (
        public full: boolean, 
        public fullHeart = '/assets/heart-solid.svg',
        public emptyHeart = '/assets/heart-regular.svg'
    ) {}

    showHeart() {        
        if(this.full) {
            return this.fullHeart;
        } else {
            return this.emptyHeart;
        }
    }
}