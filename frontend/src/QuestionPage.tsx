import React from 'react';
import { Page } from './Page';
import { useParams } from 'react-router';
import { QuestionData, getQuestion } from './QuestionsData';

export const QuestionPage = () => {
  const [question, setQuestion] = React.useState<QuestionData | null>(null);
  const { questionId } = useParams();

  React.useEffect(() => {
    const doGetQuestion = async (questionId: number) => {
      const foundQuestion = await getQuestion(questionId);
      setQuestion(foundQuestion);
    };
    if (questionId) {
      doGetQuestion(Number(questionId));
    }
  }, [questionId]);
  return <Page>Question Page {questionId}</Page>;
};
