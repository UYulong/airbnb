import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '../ScrollView'

const SectionTabs = memo((props) => {
  const { tabNames, receiveTabs } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemClickHandle = (index, item) => {
    setCurrentIndex(index)
    receiveTabs(item)
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames("item", { active: index === currentIndex })}
                onClick={e => itemClickHandle(index, item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs