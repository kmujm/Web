const study = [
    {
      text: 'JS 공부하기',
      isCompleted : true,
    },
    {
      text: 'JS 복습하기',
      isCompleted : true,
    },
  ];

  const health = [
      {
          text : '운동하기',
          isCompleted : false,
      },
      {
          text : '영양제 먹기',
          isCompleted : true,
      },
  ];

const todoStudy = new TodoList(study, document.querySelector('#study-list'));
const todoHealth = new TodoList(health, document.querySelector('#health-list'));