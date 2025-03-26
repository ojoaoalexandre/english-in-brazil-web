'use client'

import { useState } from 'react';
import { ExerciseMultipleChoice } from '../exercise/exercise-multiple-choice';
import { ExerciseSchema } from '@/types/task-schema';
import { ExerciseSimple } from '../exercise/exercise-simple';
import { ExercisePhonema } from '../exercise/exercise-phonema';
import { ExercisePronunciation } from '../exercise/exercise-pronunciation';
import { ExerciseGapMusic } from '../exercise/exercise-gap-music';
import { ExerciseGapRelation } from '../exercise/exercise-gap-relation';
import { Markdown } from '../markdown';
import { ExerciseGap } from '../exercise/exercise-gap';

export const TaskExercise = ({
  task,
  completed,
}: {
  task: ExerciseSchema,
  completed: boolean
}) => {
  const [exercisesCompleted, setExercisesCompleted] = useState(0);
  const [, setExercisesFeedback] = useState({ correct: 0, wrong: 0 });
  const [, setCanClose] = useState(false);

  const exerciseCompleted = (status: boolean) => {
    const update = status ? exercisesCompleted + 1 : exercisesCompleted - 1;
    setExercisesCompleted(update);
    if (completed) {
      setCanClose(false);
    }
  };

  const updateExercisesFeedback = (correct: number, wrong: number) => {
    setExercisesFeedback((exercise) => ({
      correct: exercise.correct + correct,
      wrong: exercise.wrong + wrong,
    }));
  };

  return (
    <div>
      {task.conteudos.map((exercise, index) => (
        <section key={`${exercise.id}-${index}`} className="pb-8">
          <div>
            {exercise.prefixo ? (
              <div className="my-5">
                <Markdown>{exercise.prefixo}</Markdown>
              </div>
            ): null}

            {exercise.__component === 'aula.exercicio-fonema' && (
              <ExercisePhonema
                {...exercise}
                allActivitiesCompletedStatus={completed}
                completed={exerciseCompleted}
                />
            )}

            {exercise.__component === 'aula.exercicio-multipla-escolha' && (
              <ExerciseMultipleChoice
                {...exercise}
                allActivitiesCompletedStatus={completed}
                completed={exerciseCompleted}
                isUniqueValidation={task.isUniqueValidation || false}
                updateExercisesFeedback={updateExercisesFeedback}
              />
            )}

            {exercise.__component === 'aula.exercicio-pronuncia' && (
              <ExercisePronunciation
                {...exercise}
                allActivitiesCompletedStatus={completed}
                completed={exerciseCompleted}
                />
            )}

            {exercise.__component === 'aula.exercicio-lacunas' && (
              <ExerciseGap
                {...exercise}
                allActivitiesCompletedStatus={completed}
                completed={exerciseCompleted}
                isUniqueValidation={task.isUniqueValidation || false}
                />
            )}

            {exercise.__component === 'aula.exercicio-lacunas-musica' && (
              <ExerciseGapMusic
                {...exercise}
                allActivitiesCompletedStatus={completed}
                completed={exerciseCompleted}
              />
            )}

            {exercise.__component === 'aula.exercicio-lacunas-relacao' && (
              <ExerciseGapRelation
                {...exercise}
                allActivitiesCompletedStatus={completed}
                completed={exerciseCompleted}
                />
            )}

            {exercise.__component === 'aula.exercicio' && (
              <ExerciseSimple {...exercise} completed={exerciseCompleted} />
            )}

          </div>
        </section>
      ))}
    </div>
  );
};
