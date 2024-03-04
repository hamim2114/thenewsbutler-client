import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Topic {
  id: number;
  topicTitle: string;
  keywords: string[];
}

interface InitialState {
  allTopics: Topic[];
}

const initialState: InitialState = {
  allTopics: []
  // allTopics: JSON.parse(sessionStorage.getItem('topics') || '[]') as Topic[],
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    addTopic: (state, action: PayloadAction<Topic>) => {
      const newTopic = action.payload;
      state.allTopics.push(newTopic); 
      sessionStorage.setItem('topics', JSON.stringify(state.allTopics));
    },
    removeTopic: (state, action: PayloadAction<number>) => {
      const topicIdToRemove = action.payload;
      state.allTopics = state.allTopics.filter(
        (topic) => topic.id !== topicIdToRemove
      );
      sessionStorage.setItem('topics', JSON.stringify(state.allTopics));
    },
    updateTopic: (state, action: PayloadAction<Topic>) => {
      const editedTopic = action.payload;
      state.allTopics = state.allTopics.map((topic) =>
        topic.id === editedTopic.id ? editedTopic : topic
      );
      sessionStorage.setItem('topics', JSON.stringify(state.allTopics));
    },
    //call after CSR
    initTopicsFromSStorage: (state) => {
      const storedTopics = sessionStorage.getItem('topics');
      if (storedTopics) {
        state.allTopics = JSON.parse(storedTopics);
      }
    },
  },
});

export const { addTopic, updateTopic, removeTopic,initTopicsFromSStorage } = topicSlice.actions;
export default topicSlice.reducer;
