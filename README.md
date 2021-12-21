# LODGIFY CHALLENGE

## Create react-app

## install Axios
## install Sass

## Connect API
- call the api axios.get
- async | await

## aap.js 
- add spinner

- create an state

class App extends Component {
  state = { todos: [] };

  async componentDidMount() {
    let result = await axios.get(
      "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress"
    );
    this.setState({ todos: result.data });
  }

  render() {