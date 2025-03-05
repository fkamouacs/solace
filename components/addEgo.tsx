import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { useTheme } from '@react-navigation/native';
import { BadgeVariant, CustomTheme } from '~/lib/constants';
import Badge, { BadgeStyle } from './ui/Badge';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Button from './ui/Button';
import { DiaryContext } from '../lib/DiaryContext';
import Toast from 'react-native-toast-message';

type Inputs = {
  entry: string;
};

const addEgo = () => {
  const { colors } = useTheme() as CustomTheme;
  const screenWidth = Dimensions.get('window').width;
  const [prideIsPressed, setPrideIsPressed] = useState(false);
  const [envyIsPressed, setEnvyIsPressed] = useState(false);
  const [wrathIsPressed, setWrathIsPressed] = useState(false);
  const [lustIsPressed, setLustIsPressed] = useState(false);
  const [slothIsPressed, setSlothIsPressed] = useState(false);
  const [greedIsPressed, setGreedIsPressed] = useState(false);
  const [gluttonyIsPressed, setGluttonyIsPressed] = useState(false);

  const diaryContext = useContext(DiaryContext);
  if (!diaryContext) return <Text>Loading...</Text>;
  const { addEntry } = diaryContext;

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const showToast = () => {
    Toast.show({
      type: 'success', // 'success', 'error', 'info'
      position: 'bottom',
      text1: 'Entry Added!',

      visibilityTime: 2000, // How long the toast should be visible
    });
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const egos = getAndResetEgos();
    addEntry(data.entry, egos);
    reset();
    showToast();
  };

  const getAndResetEgos = (): BadgeVariant[] => {
    const egoArray: BadgeVariant[] = [];

    if (prideIsPressed) {
      egoArray.push('pride');
      setPrideIsPressed(false);
    }
    if (wrathIsPressed) {
      egoArray.push('wrath');
      setWrathIsPressed(false);
    }
    if (envyIsPressed) {
      egoArray.push('envy');
      setEnvyIsPressed(false);
    }
    if (lustIsPressed) {
      egoArray.push('lust');
      setLustIsPressed(false);
    }
    if (greedIsPressed) {
      egoArray.push('greed');
      setGreedIsPressed(false);
    }
    if (gluttonyIsPressed) {
      egoArray.push('gluttony');
      setGluttonyIsPressed(false);
    }
    if (slothIsPressed) {
      egoArray.push('sloth');
      setSlothIsPressed(false);
    }

    return egoArray;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          width: '100%',
          flex: 1,
          alignItems: 'center',
          marginBottom: 20,
          paddingVertical: 12,
        }}
      >
        <Card
          style={{ width: screenWidth * 0.85, paddingVertical: 12 }}
          colors={colors}
        >
          <CardHeader>
            <CardTitle>Egos</CardTitle>
          </CardHeader>
          <CardContent
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            <Badge
              onPress={() => setPrideIsPressed(!prideIsPressed)}
              badgeStyle={prideIsPressed ? 'default' : 'secondary'}
              variant="pride"
              colors={colors}
            />
            <Badge
              onPress={() => setEnvyIsPressed(!envyIsPressed)}
              badgeStyle={envyIsPressed ? 'default' : 'secondary'}
              variant="envy"
              colors={colors}
            />
            <Badge
              onPress={() => setGluttonyIsPressed(!gluttonyIsPressed)}
              badgeStyle={gluttonyIsPressed ? 'default' : 'secondary'}
              variant="gluttony"
              colors={colors}
            />
            <Badge
              onPress={() => setGreedIsPressed(!greedIsPressed)}
              badgeStyle={greedIsPressed ? 'default' : 'secondary'}
              variant="greed"
              colors={colors}
            />
            <Badge
              onPress={() => setLustIsPressed(!lustIsPressed)}
              badgeStyle={lustIsPressed ? 'default' : 'secondary'}
              variant="lust"
              colors={colors}
            />
            <Badge
              onPress={() => setSlothIsPressed(!slothIsPressed)}
              badgeStyle={slothIsPressed ? 'default' : 'secondary'}
              variant="sloth"
              colors={colors}
            />
            <Badge
              onPress={() => setWrathIsPressed(!wrathIsPressed)}
              badgeStyle={wrathIsPressed ? 'default' : 'secondary'}
              variant="wrath"
              colors={colors}
            />
          </CardContent>
        </Card>

        <Card
          style={{
            flex: 1,
            flexDirection: 'row',
            width: screenWidth * 0.85,
            paddingVertical: 12,
            marginTop: 12,
          }}
          colors={colors}
        >
          <Controller
            control={control}
            name="entry"
            rules={{ required: 'Entry body required' }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                multiline={true}
                style={{ flex: 1, padding: 10, marginBottom: 10 }}
                placeholder="Enter Entry"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </Card>
        <Button
          style={{ marginVertical: 10 }}
          title="Submit"
          onPress={handleSubmit(onSubmit)}
        />
        <Toast />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default addEgo;
