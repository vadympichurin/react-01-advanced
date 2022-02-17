import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import Filter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import { todosOperations, todosSelectors } from '../redux/todos';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

const TodosView = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const isLoadingTodos = useSelector(todosSelectors.getLoading);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  useEffect(() => {
    dispatch(todosOperations.fetchTodos());
  }, [dispatch]);

  return (
    <Container>
      <div style={barStyles}>
        <Filter />
        <Stats />
        <IconButton onClick={toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {isLoadingTodos && <h1>Загружаем...</h1>}
      </div>

      <TodoList />

      {showModal && (
        <Modal onClose={toggleModal}>
          <TodoEditor onSave={toggleModal} />
        </Modal>
      )}
    </Container>
  );
};

export default TodosView;

// class TodosView extends Component {
//   state = {
//     showModal: false,
//   };

//   componentDidMount() {
//     this.props.fetchTodos();
//   }

// toggleModal = () => {
//   this.setState(({ showModal }) => ({
//     showModal: !showModal,
//   }));
// };

//   render() {
//     const { showModal } = this.state;

//     return (
//       <Container>
//         <div style={barStyles}>
//           <Filter />
//           <Stats />
//           <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
//             <AddIcon width="40" height="40" fill="#fff" />
//           </IconButton>

//           {this.props.isLoadingTodos && <h1>Загружаем...</h1>}
//         </div>

//         <TodoList />

//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <TodoEditor onSave={this.toggleModal} />
//           </Modal>
//         )}
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoadingTodos: todosSelectors.getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchTodos: () => dispatch(todosOperations.fetchTodos()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
