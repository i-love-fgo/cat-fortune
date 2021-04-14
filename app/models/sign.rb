class Sign < ActiveHash::Base
  self.data = [
    { id:1, name: '--'},
    { id:2, name: '山羊座'},
    { id:3, name: '水瓶座'},
    { id:4, name: '魚座'},
    { id:5, name: '牡羊座'},
    { id:6, name: '牡牛座'},
    { id:7, name: '双子座'},
    { id:8, name: '蟹座'},
    { id:9, name: '獅子座'},
    { id:10, name: '乙女座'},
    { id:11, name: '天秤座'},
    { id:12, name: '蠍座'},
    { id:13, name: '射手座'}
  ]

  include ActiveHash::Associations
  has_many :zodiacs

end