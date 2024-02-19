# IN THIS REPOSITORY🦋

## 🚀useContext

### You can see output in ⚡ [Netlify.com]()📌

- First `export const myContext = createContext('')`
 ### 💨Syntax for provider
```javascript
<myContext.Provider value={[contextValue, updatingFn]}>
  <CartPage />
</myContext.Provider>
```
- Then, use this like
 ````
 const [contextValue, updatingFn] = useContext(myContext)
`````
  where we wanna use the context.
  

