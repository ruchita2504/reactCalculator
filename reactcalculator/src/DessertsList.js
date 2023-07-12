function DessertsList(props) {
    const value = props.data.filter(info => info.calories < 500).sort((a,b) => b.calories-a.calories).map(dataList => {
        let dessertName = dataList.name;
        let dessertCalories = dataList.calories;
        return <ul><li>{dessertName} - {dessertCalories} cal</li></ul>
    }).reverse();
    return value;
}
export default DessertsList;
  