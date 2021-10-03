import React from 'react';
import { QuestionList } from './QuestionList';
import { getUnasweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);

  const [questionsLoading, setQuestionsLoading] = React.useState(true);
  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unanweredQuestions = await getUnasweredQuestions();
      setQuestions(unanweredQuestions);
      setQuestionsLoading(false);
    };

    doGetUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    console.log('to do - move to the ask page');
  };

  return (
    <Page>
      <div>
        <div>
          <PageTitle>Unanswered Questions</PageTitle>
          <button onClick={handleAskQuestionClick}>Ask a Question</button>
        </div>
        {questionsLoading ? (
          <div>Loading...</div>
        ) : (
          <QuestionList data={questions} />
        )}
      </div>
    </Page>
  );
};
