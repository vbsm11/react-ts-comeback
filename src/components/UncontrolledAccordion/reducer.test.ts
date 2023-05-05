import {reducer, StateType} from './reducer';

test('reducer must work correct', () => {
    const state: StateType = {
        collapsed: true
    }

    const changedState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(changedState).not.toBe(state)
    expect(changedState.collapsed).toBe(false)
})