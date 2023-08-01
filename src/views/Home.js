import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AdjustmentsHorizontalIcon, Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import * as Animatable from 'react-native-animatable'

import styles from '../styles'
import { categories, foodItems } from '../constants'
import FoodCard from '../components/FoodCard'

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Burger')

  return (
    <View className='flex-1 relative'>
      <Image source={require('../assets/images/background.png')} 
        className='absolute w-full h-full' 
        blurRadius={40}  
      />
      <SafeAreaView className='flex-1 mt-4'>
        {/* bar */}
        <View className='flex-row justify-between items-center mx-4'>
          <View style={styles.shadow} className='bg-white rounded-2xl p-3'>
            <Bars3CenterLeftIcon size={25} color='black' strokeWidth={1.5} />
          </View>
          <View className='rounded-3xl'
            style={{
              backgroundColor: 'rgba(255,255,255, 0.7)',
              padding: 2,
            }}
          >
            <Image source={require('../assets/images/profile-circle.png')} className='w-12 h-12 rounded-2xl' />
          </View>
        </View>

        {/* title */}
        <View className='my-12 space-y-2'>
          <Text className='mx-4 text-5xl font-medium text-gray-800'>Fast and</Text>
          <Text className='mx-4 text-5xl font-medium text-gray-800'>
            <Text className='font-extrabold'>Deliciouse</Text> Food
          </Text>
        </View>

        {/* search */}
        <View className='flex-row mx-4 justify-between items-center space-x-3'>
          <View className='flex-row flex-1 p-4 items-center bg-white rounded-2xl'>
            <MagnifyingGlassIcon color='gray' strokeWidth={1} />
            <TextInput className='ml-2 w-[80%] p-0 text-gray-800' placeholder='Food' value={'Search'} />
          </View>
          <View className='bg-white rounded-2xl p-4'>
            <AdjustmentsHorizontalIcon size={25} color='black' />
          </View>
        </View>

        {/* categories */}
        <ScrollView className='my-3 py-6 max-h-20'
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20,}}
        >
          {categories.map((category, index) => {
            let isActive = category == activeCategory
            let textClass = isActive ? 'font-bold' : ''

            return (
              <Animatable.View
                delay={index*120} // retraso en milisegundos
                animation='slideInDown' // tipo de animacion
                key={index}
              >
                <TouchableOpacity onPress={() => setActiveCategory(category)} className='mr-9'>
                  <Text className={`text-white text-base tracking-widest ${textClass}`}>{category}</Text>
                  {
                    isActive
                      && (
                        <View className='flex-row justify-center'>
                          <Image source={require('../assets/images/line.png')} 
                            className='h-3 w-5'
                          />
                        </View>
                      )
                    }
                </TouchableOpacity>
              </Animatable.View>
            )
          })}
        </ScrollView>

        <ScrollView className=''
          horizontal  
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20,}}
        >
          {foodItems.map((item, index) => {
            return (
              <FoodCard 
                item={item} 
                index={index}
                key={index}
              />
            )
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Home