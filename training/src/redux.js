import { configureStore, createSlice } from "@reduxjs/toolkit"
import trainList from "./Datas/ListTrain"
import TrainingClass from "./Datas/TrainingClass";

const trainingSlice = createSlice({

    name: "trainings",
    initialState: trainList,
    reducers: {
        //Dispactch des taches:        
        addTraining: (state, action) => {
            //action.tyoe: "trainings/addTraining, action.payload: nom du taining"
            state.push(new TrainingClass("New" + state.length));
        },
        deleteTraining: (state, action) => {
            //console.log(state);
            state = state.filter((e) => e.name != action.payload);
            return state;
        },
    }
}
)

export const store = configureStore({
    reducer: {
        trainings: trainingSlice.reducer,
    },
}
);