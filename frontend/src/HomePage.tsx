import React from 'react';
import { QuestionList } from './QuestionList';
import { getUnasweredQuestions } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => (
  <Page>
    <div>
      <div>
        <PageTitle>Unanswered Questions</PageTitle>
        <button>Ask a Question</button>
      </div>
      {/* <QuestionList data={getUnasweredQuestions()} /> */}
    </div>
  </Page>
);
