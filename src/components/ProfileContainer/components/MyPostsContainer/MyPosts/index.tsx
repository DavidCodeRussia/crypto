import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { maxLengthCreator } from '../../../../../utils/validators/validators';
import { Textarea } from '../../../../common/FormsControls';
import { TFuncAddPostProps, TMyPosts, TPostFormData, TPostFormOwnProps } from '../../../types';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Post from './Post/Post';

import s from './MyPosts.module.scss';

const MyPosts = (props: TMyPosts) => {
  let postsElements = [...props.posts]
    .reverse()
    .map((p) => <Post profile={props.profile} key={p.id} message={p.message} likes={p.likes} />);

  let onAddPost = (values: TFuncAddPostProps) => {
    props.addPost(values.NewPostBody);
  };

  return (
    <div className={s.MyPosts}>
      My Posts
      <div className={s.post}>
        <AddPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.post}>{postsElements}</div>
    </div>
  );
};

let maxLengthCreator10 = maxLengthCreator(150);

const AddPostForm: React.FC<
  InjectedFormProps<TPostFormData, TPostFormOwnProps> & TPostFormOwnProps
> = (props) => {
  return (
    <form className={s.fieldPosts} onSubmit={props.handleSubmit}>
      <Field
        name="NewPostBody"
        component={Textarea}
        elementtype={'input'}
        validate={maxLengthCreator10}
        placeholder={'Write your posts here'}
        className={s.nativeFieldProfile}
      />
      <Stack>
        <Button type="submit" variant="contained">
          Add post
        </Button>
      </Stack>
    </form>
  );
};

const AddPostFormRedux = reduxForm<TPostFormData, TPostFormOwnProps>({
  form: 'PostAddPostFormRedux',
})(AddPostForm);

export default MyPosts;
