import React from 'react';
import { Page } from './Page';
import {
  Fieldset,
  FieldContainer,
  FieldLabel,
  FieldInput,
  FieldTextArea,
  FormButtonContainer,
  PrimaryButton,
  FieldError,
  SubmissionSuccess,
} from './Styles';
import { useForm } from 'react-hook-form';
import { postQuestion } from './QuestionsData';

type FormData = {
  title: string;
  content: string;
};

export const AskPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    formState,
  } = useForm<FormData>({ mode: 'onBlur' });

  const [successfullySubmited, setSuccessfullySubmitted] =
    React.useState(false);
  const submitForm = async (data: FormData) => {
    const result = await postQuestion({
      title: data.title,
      content: data.content,
      userName: 'Larry',
      created: new Date(),
    });
    setSuccessfullySubmitted(result ? true : false);
  };
  return (
    <Page title="Ask a question">
      <form onSubmit={handleSubmit(submitForm)}>
        <Fieldset disabled={formState.isSubmitting || successfullySubmited}>
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput
              id="title"
              name="title"
              required={true}
              type="text"
              minLength={10}
              {...register}
            />
            {errors.title && errors.title.type === 'required' && (
              <FieldError>You must enter the questions</FieldError>
            )}
            {errors.title && errors.title.type === 'minLength' && (
              <FieldError>The title must be at least 10 characters</FieldError>
            )}
          </FieldContainer>
          <FieldContainer>
            <FieldLabel>Content</FieldLabel>
            <FieldTextArea
              id="content"
              name="content"
              required={true}
              minLength={50}
              {...register}
            />
            {errors.content && errors.content.type === 'minLength' && (
              <FieldError>
                The content must be at least 50 characters
              </FieldError>
            )}
          </FieldContainer>
          <FormButtonContainer>
            <PrimaryButton type="submit">Submit Your Question</PrimaryButton>
          </FormButtonContainer>
          {successfullySubmited && (
            <SubmissionSuccess>
              Your question was successfully submitted!
            </SubmissionSuccess>
          )}
        </Fieldset>
      </form>
    </Page>
  );
};
export default AskPage;
