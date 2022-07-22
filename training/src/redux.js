import { configureStore, createSlice } from "@reduxjs/toolkit"
import trainList from "./Datas/ListTrain"
import TrainingClass from "./Datas/TrainingClass";
import {exercicesList, getDatas} from './Datas/Exercices'

const trainingSlice = createSlice({

    name: "trainings",
    initialState: trainList,
    reducers: {
        //Dispactch des taches:        
        addTraining: (state, action) => {
            //action.tyoe: "trainings/addTraining, action.payload: nom du taining"
            state.push(new TrainingClass(action.payload, []));
        },
        deleteTraining: (state, action) => {
            //console.log(state);
            getDatas();
            state = state.filter((e) => e.name != action.payload);
            return state;
        },
    }
}
)

const exerciceSlice = createSlice({

    name: "exercices",
    

}
)

export const store = configureStore({
    reducer: {
        trainings: trainingSlice.reducer,
    },
}
);