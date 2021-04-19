import post from '@utils/axios/post';
import * as Config from '@utils/axios/axiosConfig';

interface IUploadPictureRequest {
  image: {
    uri: string;
    type: string;
    name: string;
  };
}

export const postUploadPicture = (request: IUploadPictureRequest) =>
  post('api/pictures/upload', request, Config.withToken());
