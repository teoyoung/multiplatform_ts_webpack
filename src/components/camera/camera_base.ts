export default class CameraBase {

    protected readonly name: string;

    constructor(name: string){
        this.name = name;
        console.log(`Camera: ${name}`);
    }
}