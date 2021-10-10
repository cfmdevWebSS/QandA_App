import React from 'react';
import { Page } from './Page';
import { useParams } from 'react-router';

export const QuestionPage = () => {
  const { questionId } = useParams();
  return <Page>Question Page {questionId}</Page>;
};
