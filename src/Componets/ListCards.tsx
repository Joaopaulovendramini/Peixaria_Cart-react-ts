import Cards from "./Cards";

const ListCards = () => {
  return (
    <div className="flex flex-col justify-center gap-8 mt-8 items-center lg:flex-row">
      <Cards
        productName="Atum Solido em Óleo Coqueiro 170g"
        price={16}
        imageUrl="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSpek7f-WZ-Z1OibSSNWcd_JKJPzS8dqS43S13-pJp4jfeEumE2jtVWsJGBVIly_ULl1_zSpr8fHXoDewKlZ2GR5Z0t4B_a2GQtfE8-8-o&usqp=CAE"
      />
      
      <Cards
        productName="Frescatto Lombo De Atum Fresco Sem Pele"
        price={33}
        imageUrl="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQuvRx1U4lbhD3CfS9wjTMxNoAwrHa9Oq6T_Wln__U_UldjiP9i04gVzRSC7NlQy05IoeclyEHr_usLyNQkqpMYiKG7kVI_ocX21RA8vnj_0UzINnt6J6jxaQ&usqp=CAE"
      />

       <Cards
        productName="	Atum Gomes Da Costa - Ralado Ao Natural - 170g"
        price={22}
        imageUrl="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHfzYwnTJARFiaSjFUiXq5pcr_VDlMhF-YsU6asjwQ0wekbwxVg8d_5F5Neoy9vAhU4MPAT3Wj6Sgqgpo16laFq6rlbrz9Ey-2ik6OYiw&usqp=CAE"
/>
    </div>
  );
};

export default ListCards;
