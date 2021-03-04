import Camera from "../../components/camera/editor/camera";
import CameraManager from "../../engine/camera_manager";

const camera = new Camera('editor');
const camera_manager = new CameraManager(camera);

console.log('Hello editor');