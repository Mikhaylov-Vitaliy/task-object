/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
	if (data.gender === 'female') {
        delete data.age;
    } 
	else if (data.gender === 'male') {
        if (!('income' in data)) {
            data.income = 100000;
        }
    }
    return data;
}
/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
	let allKeys = [];
    let keys1 = Object.keys(obj1);
    for (let i = 0; i < keys1.length; i++) {
        allKeys.push(keys1[i]);
    }
    let keys2 = Object.keys(obj2);
    for (let i = 0; i < keys2.length; i++) {
        allKeys.push(keys2[i]);
    }
    let keys3 = Object.keys(obj3);
    for (let i = 0; i < keys3.length; i++) {
        allKeys.push(keys3[i]);
    }
    let uniqueKeys = [];
    for (let i = 0; i < allKeys.length; i++) {
        let currentKey = allKeys[i];
        if (uniqueKeys.indexOf(currentKey) === -1) {
            uniqueKeys.push(currentKey);
        }
    }
    uniqueKeys.sort();

    return uniqueKeys;
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
	let clones = [];
    for (let i = 0; i < count; i++) {
        let clone = structuredClone(obj);
        clone.id = i;
        clones.push(clone);
    }
    return clones;
}
