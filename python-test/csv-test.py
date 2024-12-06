import pandas as pd

df = pd.read_csv("./python-test/csv/TRXUSD.csv")

print(df.head()) #print 10 rows from start

print(df.head(30)) #print 30 rows from start

print(df.tail(50)) #print 50 rows from end