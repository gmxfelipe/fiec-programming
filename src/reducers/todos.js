
export default function todos(state = [], action  ) {
    switch (action.type) {
        case 'ADD_TODO': // Adicionar novo item na lista 
        return [ ...state, { id: Math.random(), text: action.text, } ]

        default: // Por padrão returna sempre um state sem alteração
        return state;
        
    }
}   