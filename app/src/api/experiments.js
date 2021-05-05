import { EXPERIMENTS_API } from '../settings';

const getAssignment = async (experimentId) => {
  const response = await fetch(`${EXPERIMENTS_API}/${experimentId}`);
  return response.json();
};

const experiments = {
  getAssignment,
};

export default experiments;
