import type { Debt } from "@/@types";

function List() {
  const mockData: Debt[] = [
    {
      id: 1,
      title: "Kaprao",
      date: new Date(),
      amount: 100,
      description: "Kaprao",
      isCleared: false
    },
    {
      id: 2,
      title: "Sausage",
      date: new Date(),
      amount: 50,
      description: "Mahla Sausage",
      isCleared: true
    }
  ]
  return (
    <div>
      {
        mockData.map((data) => {
          return (
            <div>
              {data.id}) {data.title}
            </div>
          )
        })
      }
    </div>
  )
};

export default List;
