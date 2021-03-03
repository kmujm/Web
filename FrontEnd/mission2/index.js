const todo = [
    {
      text: 'JS 공부하기',
      isCompleted : true,
    },
    {
      text: 'JS 복습하기',
      isCompleted : true,
    },
    {
      text : '운동하기',
      isCompleted : false,
  },
  {
      text : '영양제 먹기',
      isCompleted : true,
  },
  ]

new App(document.querySelector("#app"), todo)
