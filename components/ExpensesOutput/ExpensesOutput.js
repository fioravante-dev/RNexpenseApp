import { Text ,View, StyleSheet } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses , expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 0,
      backgroundColor: GlobalStyles.colors.primary700,
      flex: 1,
    },
    infoText: {
      fontSize: 16,
      color: "white",
      textAlign: "center",
      marginTop: 32,
    },
});
