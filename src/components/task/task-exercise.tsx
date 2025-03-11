'use client'

import { useState } from 'react';
import YouTubePlayer from 'react-player/youtube';
import { ExerciseMultipleChoice } from '../exercise/exercise-multiple-choice';
import { ExerciseSchema } from '@/types/task-schema';
// import { switchTaskStatus } from '@/actions/switch-task-status';
import { ExerciseSimple } from '../exercise/exercise-simple';
import { ExercisePhonema } from '../exercise/exercise-phonema';
import { ExercisePronunciation } from '../exercise/exercise-pronunciation';
import { ExerciseGapMusic } from '../exercise/exercise-gap-music';
import { ExerciseGapRelation } from '../exercise/exercise-gap-relation';
import { Markdown } from '../markdown';

export const TaskExercise = ({
  task,
  completed,
  course_slug,
  chapter_slug,
  lesson_slug,
  component,
  component_id,
}: {
  task: ExerciseSchema,
  completed: boolean
  course_slug: string,
  chapter_slug: string,
  lesson_slug: string,
  component: string,
  component_id: string
}) => {
  const [exercisesCompleted, setExercisesCompleted] = useState(0);
  const [, setExercisesFeedback] = useState({ correct: 0, wrong: 0 });
  const [, setCanClose] = useState(false);

  // const handleSubmit = async () => {
  //   await switchTaskStatus({
  //     course_slug,
  //     chapter_slug,
  //     lesson_slug,
  //     component,
  //     component_id,
  //     points: (exercisesFeedBack.correct / (exercisesFeedBack.correct + exercisesFeedBack.wrong)) * 100,
  //   })
  // }


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
      {task.conteudos.map((exercise) => (
        <section key={exercise.id} className="pb-8">
          <div>
            {exercise.prefixo ? (
              <div className="my-5">
                <Markdown>{exercise.prefixo}</Markdown>
              </div>
            ): null}

            {exercise.__component === 'aula.exercicio-fonema' && (
              // <ExercisePhonema {...exercise} exercisePosition={Object.values(exercisePosition).slice(0, index).reduce((current, previous) => current + previous, 1)} allActivitiesCompletedStatus={atividadeConcluida} completed={exerciseCompleted} />
              <pre>{JSON.stringify(exercise, null, 2)}</pre>
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

            {/* {exercise.__component === 'aula.exercicio-pronuncia' && (
              <ExercisePronunciation
                {...exercise}
                allActivitiesCompletedStatus={completed}
                completed={exerciseCompleted}
                />
            )} */}

            {/* {exercise.__component === 'aula.exercicio-lacunas' && (
              <Gap {...exercise} exercisePosition={Object.values(exercisePosition).slice(0, index).reduce((current, previous) => current + previous, 1)} allActivitiesCompletedStatus={atividadeConcluida} completed={exerciseCompleted} isUniqueValidation={aula_exercicio?.isUniqueValidation} updateExercisesFeedback={updateExercisesFeedback} />
            )} */}

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
