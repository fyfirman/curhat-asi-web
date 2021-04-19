import { postUploadPicture } from '@services/PictureServices';
import { Editor, IAllProps } from '@tinymce/tinymce-react';

const RichEditor = (props: IAllProps) => {
  return (
    <div style={{ height: props.init?.height ?? 500 }}>
      <Editor
        apiKey="wih2rf5zdv0xfg2k76jg6xin5dzi1xafmly22xp6btipsjkg"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          images_upload_credentials: true,
          images_upload_handler: async (blobInfo, success) => {
            const res = await postUploadPicture({
              image: {
                name: blobInfo.filename(),
                type: 'image/jpeg',
                uri: blobInfo.blobUri(),
              },
            });
            console.log(res);

            success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
          },
          automatic_uploads: true,
          file_picker_types: 'image',
          toolbar:
            'undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | media image link | bullist numlist outdent indent | removeformat searchreplace | preview help ',
        }}
        {...props}
      />
    </div>
  );
};

export default RichEditor;
