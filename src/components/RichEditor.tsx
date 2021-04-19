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
          toolbar:
            'undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | media image link | bullist numlist outdent indent | removeformat searchreplace | preview help ',
        }}
        {...props}
      />
    </div>
  );
};

export default RichEditor;
