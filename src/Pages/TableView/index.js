import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import styles from './styles';

export default class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.route.params.data,
      tableHead: ['ID', 'X', 'Y', 'Z'],
      widthArr: [100, 180, 180, 180],
    };
  }

  render() {
    const { state } = this;
    let tableData = [];
    const desiredKeys = ['_id', 'x', 'y', 'z'];

    tableData = state.data.map(
      (item) => desiredKeys.map(
        (key) => (key === '_id' ? item[key].slice(-5) : item[key]),
      ),
    );

    return (
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View>
            <Table borderStyle={styles.headerTable}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.headerText}
              />
            </Table>
            <ScrollView
              style={styles.dataWrapper}
              showsVerticalScrollIndicator={false}
            >
              <Table borderStyle={styles.bodyTable}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={rowData}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index % 2 && { backgroundColor: '#F7EBFF' }]}
                      textStyle={styles.bodyText}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
