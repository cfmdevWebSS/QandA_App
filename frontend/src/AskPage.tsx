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
} from './Styles';
import { useForm } from 'react-hook-form';

type FormData = {
  title: string;
  content: string;
};

export const AskPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' });
  return (
    <Page title="Ask a question">
      <form>
        <Fieldset>
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
              maxLength={50}
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
        </Fieldset>
      </form>
    </Page>
  );
};
export default AskPage;
