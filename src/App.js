import './index.css'

import _Combobox from './components/_Combobox';
import _Dialog from './components/_Dialog';
import _RadioGroup from './components/_RadioGroup'
import _Tabs from './components/_Tabs';
import _Transition from './components/_Transition';
import ClassicalAlgorithm from './components/ClassicalAlgorithm'
import QuantumAlgorithm from './components/QuantumAlgorithm'
import { CountUp } from 'use-count-up';

import { useState } from 'react'

const colorScheme = {
  box1: "bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200",
  box2: "bg-gradient-to-r from-cyan-500 to-blue-500",
  box_main: "bg-gradient-to-b from-indigo-500 via-purple-500 to-sky-500",
  box4: "bg-gradient-to-r from-yellow-200 to-amber-400",
  box5: "bg-slate-100 border-y-4 border-emerald-300",
  box_confirmation: "bg-gradient-to-t from-rose-300 to-sky-500",
  box7: "bg-gradient-to-b from-orange-200 to-red-400",
  box_choice: "bg-gradient-to-b from-amber-200 to-yellow-200",
  box_info: "bg-slate-200",
  box10: "bg-gradient-to-r from-slate-500 to-slate-300",
  box_quantum: "bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600",
  box_classic: "bg-gradient-to-l from-yellow-300 to-pink-400",
}

const choices = [
  {
    name: 'Classical Solution',
    chip: 'Using Linear search',
    promotion: 'Old but Gold',
  },
  {
    name: 'Quantum Solution',
    chip: 'Using Grover\'s algorithm',
    promotion: '???',
  }
]

const pokemons = [
  { id: 1, name: 'Charizard', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
  { id: 2, name: 'Gengar', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png' },
  { id: 3, name: 'Arcanine', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png' },
  { id: 4, name: 'Bulbasaur', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
  { id: 5, name: 'Blaziken', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png' },
  { id: 6, name: 'Umbreon', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png' },
  { id: 7, name: 'Lucario', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png' },
  { id: 8, name: 'Eevee', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png' },
  { id: 9, name: 'Gardevoir', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png' },
  { id: 10, name: 'Dragonite', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' },
  { id: 11, name: 'Absol', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png' },
  { id: 12, name: 'Typhlosion', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png' },
  { id: 13, name: 'Ampharos', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  { id: 14, name: 'Squirtle', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  { id: 15, name: 'Flygon', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png' },
  { id: 16, name: 'Ninetales', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png' },
  { id: 17, name: 'Tyranitar', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png' },
  { id: 18, name: 'Infernape', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png' },
  { id: 19, name: 'Snorlax', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png' },
  { id: 20, name: 'Torterra', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png' },
  { id: 21, name: 'Luxray', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png' },
  { id: 22, name: 'Scizor', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png' },
  { id: 23, name: 'Blastoise', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'},
  { id: 24, name: 'Mudkip', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png'},
  { id: 25, name: 'Pikachu', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
]

const tabs = {
  'What is this app about?': [
    {
      id: 1,
      title: ``,
      content: 'Suppose you have access to an unsorted list that contains every pokemon species imaginable. \
      You are trying to find out if your favorite pokemon is in this list.',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "Two Options",
      content: 'You are offered a classical algorithm that iterates through each pokemon \
        in the list and checks if it matches your favorite pokemon -- this is linear search. \
        There is also an elegant solution that utilizes a quantum algorithm, namely Grover\'s algorithm.',

      commentCount: 3,
      shareCount: 2,
    },
  ]
}

const App = () => {
  const [selected, setSelected] = useState(choices[0])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0])

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-slate-800 pb-20">
      <div className="flex-5 grow-0">
        {isSubmitted === true
          ?
            <div className="grid grid-cols-1 grid-rows-1 gap-5 grid-flow-row lg:grid-cols-1">
              {selected.name.includes('Quantum')
                ?
                  <div className={`p-4 max-w-lg max-h-lg ${colorScheme.box_quantum} border-transparent rounded-md shadow-md space-y-2`}>
                    <_Transition avatar={'⚛️'} selected={selected}/>
                    <div className={`p-1 max-w-lg max-h-lg text-center text-slate-200 border-transparent rounded-md`}>
                      <CountUp 
                          isCounting
                          start={0}
                          end={2**32}
                          duration={2**6}
                          easing={Math.easeOutQuad = function (t, b, c, d) {
                            t /= d;
                            return -c * t*(t-2) + b;
                          }}
                          thousandsSeparator={' '}
                          updateInterval={0}
                          onUpdate={(currentValue) => {
                            // it will fire once every second
                          }}
                          formatter={(value) => value.toFixed(0) + ' Pokemons Searched'}
                        />
                    </div>
                    <div className={`p-2 max-w-lg max-h-lg ${colorScheme.box_info} border-transparent rounded-md shadow-md space-y-2`}>
                      <QuantumAlgorithm algorithmName={'⚛️ ' + selected.name} pokemon={selectedPokemon} />
                    </div>
                  </div>
                :
                  <div className={`p-4 max-w-lg max-h-lg ${colorScheme.box_classic} border-transparent rounded-md shadow-md space-y-2`}>
                    <_Transition avatar={'🖥️'} selected={selected}/>
                    <div className={`p-1 max-w-lg max-h-lg text-center border-transparent rounded-md`}>
                      <CountUp
                          isCounting
                          start={0}
                          end={2**32}
                          duration={2**22}
                          easing="linear"
                          thousandsSeparator={' '}
                          updateInterval={0}
                          onUpdate={(currentValue) => {
                            // it will fire once every second
                          }}
                          formatter={(value) => value.toFixed(0) + ' Pokemons Searched'}
                        />
                    </div>
                    <div className={`p-4 max-w-lg max-h-sm ${colorScheme.box_main} border-transparent rounded-md shadow-md space-y-2`}>
                      <ClassicalAlgorithm algorithmName={'🖥️ ' + selected.name} pokemonName={selectedPokemon.name}/>
                    </div>
                  </div>
              }
            </div>
          :
            <div className="grid grid-cols-1 grid-rows-12 gap-20 grid-flow-row lg:grid-cols-1">
              <div className={`p-10 max-w-lg ${colorScheme.box_main} border-transparent rounded-md shadow-md space-y-2`}>
                <div className={`p-2 px-5 max-w-lg max-h-lg ${colorScheme.box_info} border-transparent rounded-md shadow-md space-y-2`}>
                  <_Tabs tabs={tabs} />
                </div>
                <div className={`p-10 max-w-lg ${colorScheme.box_choice} border-transparent rounded-md shadow-lg space-y-2`}>
                  <div className={`p-2 text-center max-w-lg ${colorScheme.box5} border-transparent rounded-md shadow-md space-y-2`}>
                    <strong>Choose carefully</strong>
                  </div>
                  <_RadioGroup selected={selected} setSelected={setSelected} choices={choices} />
                </div>
                <div className='text-white text-center p-5'>
                  What is your favorite pokemon?
                </div >
                <_Combobox selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} pokemons={pokemons} />
              </div>
              <div className={`p-10 max-w-lg ${colorScheme.box_confirmation} border-transparent rounded-md shadow-md`}>
              <div className='text-white text-center pb-5'>
                Are you sure you want to go with the {selected.name}?
              </div>
                <_Dialog
                  header='You chose well!'
                  message="You will now be redirected to a seperate page to wait for the end of your algorithm's execution."
                  confirmation='Sounds good!'
                  isSubmitted={isSubmitted}
                  setIsSubmitted={setIsSubmitted} />
              </div>
            </div>
        }
      </div>
    </div>
  );
}


export default App;
