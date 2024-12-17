import AppBtn from "./AppBtn"
function AppCard() {
  return (
  <div className="container card mb-1">
    <img src="/339084.jpg" alt="" />
    <section className="par">
      <h4 className="mb-1">Titolo del Post</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime sequi exercitationem vel voluptatum ipsa tempore laborum consequuntur non soluta quia inventore nihil numquam, quis qui sed sint dicta suscipit laboriosam.
      </p>
      <br />
    <AppBtn />
    </section>
  </div>
  )
}

export default AppCard