import { MOCK_STEPS } from 'src/app/steps/shared/mock-steps';
import { Tool } from './tool.model';

export const MOCK_TOOLS = [
  new Tool(
    1,
    'In-Sight 8000',
    'As the world’s smallest, stand-alone vision system, the In-Sight 8000 series offers a range of monochrome and color vision systems in resolutions from 0.3MP up to 5MP.',
    MOCK_STEPS
  ),
  new Tool(
    2,
    'D-A5000 Series Area Scan 3D Camera',
    'Cognex’s 3D-A5000 series is an area scan 3D camera designed to capture high-resolution 3D images. It features 3D LightBurst technology which rapidly acquires images to maximize throughput. ',
    [MOCK_STEPS[2]]
  ),
];
