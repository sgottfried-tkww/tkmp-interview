import type { APIGatewayProxyHandler } from 'aws-lambda';
import experiments from './experiments';

export const flipper: APIGatewayProxyHandler = async (event) => {
  if (!event.pathParameters?.experimentId) {
    return {
      statusCode: 404,
      body: "Bad Request",
    };
  }

  const { experimentId } = event.pathParameters;
  const experiment = experiments.find((e) => e.id === experimentId);

  if (!experiment) {
    return {
      statusCode: 404,
      body: JSON.stringify({ assignment: null, error: `Experiment ${experimentId} is not a valid experiment.`, }),
    };
  }

  const { rollout, assignments } = experiment;

  const rolloutNumber = Math.random() * 100;
  if (rolloutNumber >= rollout) {
    return {
      statusCode: 200,
      body: JSON.stringify({ assignment: null }),
    };
  }

  let assignmentNumber = Math.random() * 100;
  let index = 0;
  let allocation = assignments[index].allocation;

  while (allocation < assignmentNumber) {
    index += 1;
    allocation = assignments[index].allocation
    assignmentNumber -= allocation;
  }

  const assignment = {
    id: assignments[index].id,
    name: assignments[index].name
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ assignment }),
  };

};
