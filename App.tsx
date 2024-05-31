import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase, { query } from '@react-native-firebase/firestore';
import { Text, View } from 'react-native';

const App = () => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const fb = firebase().collection('sizes');
    fb.onSnapshot(querySnapshot => {
      const ls: any = [];
      querySnapshot.forEach((doc:any) => {
        ls.push({
          id: doc.data().id,
          name: doc.data().name,
          value: doc.data().value,
        });
      });
      console.log(ls);
      setSizes(ls);
    });
  }, []);

  return (
    <NavigationContainer>
      <View>
        {sizes.map( item=>{
          return (<Text>{item.name}</Text>)
        })}
      </View>
    </NavigationContainer>
  );
};

export default App;