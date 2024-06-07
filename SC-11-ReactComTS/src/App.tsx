// 6 - desestructuring
import { createContext } from 'react'
import Desestructuring, {Category} from './components/Desestructuring'

// 5 - importação de components
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'

// 6 - useState
import State from './components/State'

// 11 - utilizando contexto
import Context from './components/Context'

// 9 - type
type textOrNull = string | null
type fixed  = 'Isso' | 'Ou' | 'Aquilo'

// 10 - context
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - variaveis
  const name: string = "Matheus"
  const age: number = 30
  const isWorking: boolean = true


  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  // 8 - type
  const myText: textOrNull = 'Tem algum texto aqui!'
  let mySecondText: textOrNull = null

  // mySecondText = 'asd'

  const testandoFixed: fixed = 'Isso'

  // 10 - context
  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>React com TS</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking ? (
          <p>Está trabalhando no momento!</p>
        ) : (
          <p>Não está trabalhando!</p>
        )}
        {userGreeting(name)}
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Desestructuring
          title='Primeiro Post'
          content='Algum conteudo'
          commentsQty={10}
          tags={['TS', 'JS']}
          category={Category.TS} />

        <Desestructuring
          title='Segundo Post'
          content='Mais outro conteudo'
          commentsQty={5}
          tags={['Python']}
          category={Category.P} />
        <State />
        {myText &&
          <p>Tem texto na variavel!</p>
        }
        {mySecondText &&
          <p>Tem texto na variavel!</p>
        }
        {
          testandoFixed && 
          <p>{testandoFixed}</p>
        }
        <Context />
      </div>
  </AppContext.Provider >
  )
}

export default App
